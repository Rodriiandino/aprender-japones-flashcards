'use client'

import { useState, useEffect, useMemo, useCallback, memo } from 'react'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Checkbox } from '@/components/ui/checkbox'
import { Filter } from 'lucide-react'
import {
  useCharacterSelectionStore,
  useConfigLearnStore
} from '@/store/learn-store'
import { Separator } from '@/components/ui/separator'
import { AlphabetCategory } from '@/types/alphabet-type'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import TooltipCustom from '../../tooltip-custom'

const CharacterGroup = memo(
  ({
    groupKey,
    group,
    currentTab,
    setGroupSelection,
    setCharacterSelection
  }: {
    groupKey: string
    group: {
      name: string
      selected: boolean
      characters: Record<string, boolean>
    }
    currentTab: AlphabetCategory
    setGroupSelection: (
      alphabet: AlphabetCategory,
      groupKey: string,
      selected: boolean
    ) => void
    setCharacterSelection: (
      alphabet: AlphabetCategory,
      groupKey: string,
      charKey: string,
      selected: boolean
    ) => void
  }) => {
    const handleGroupChange = useCallback(
      (checked: boolean | 'indeterminate') => {
        setGroupSelection(currentTab, groupKey, checked === true)
      },
      [currentTab, groupKey, setGroupSelection]
    )

    return (
      <div className='space-y-2'>
        <div className='flex items-center'>
          <Checkbox
            id={`${currentTab}-${groupKey}`}
            checked={group.selected}
            onCheckedChange={handleGroupChange}
          />
          <label
            htmlFor={`${currentTab}-${groupKey}`}
            className='text-sm font-medium ml-2 cursor-pointer'
          >
            {group.name}
          </label>
        </div>
        <div className='pl-6 flex flex-wrap gap-x-3 gap-y-1'>
          {Object.entries(group.characters).map(([charKey, isSelected]) => (
            <CharacterCheckbox
              key={charKey}
              charKey={charKey}
              isSelected={isSelected}
              currentTab={currentTab}
              groupKey={groupKey}
              setCharacterSelection={setCharacterSelection}
            />
          ))}
        </div>
        <Separator />
      </div>
    )
  }
)

const CharacterCheckbox = memo(
  ({
    charKey,
    isSelected,
    currentTab,
    groupKey,
    setCharacterSelection
  }: {
    charKey: string
    isSelected: boolean
    currentTab: AlphabetCategory
    groupKey: string
    setCharacterSelection: (
      alphabet: AlphabetCategory,
      groupKey: string,
      charKey: string,
      selected: boolean
    ) => void
  }) => {
    const handleCharChange = useCallback(
      (checked: boolean | 'indeterminate') => {
        setCharacterSelection(currentTab, groupKey, charKey, checked === true)
      },
      [currentTab, groupKey, charKey, setCharacterSelection]
    )

    return (
      <div className='flex items-center space-x-1'>
        <Checkbox
          id={`${currentTab}-${groupKey}-${charKey}`}
          checked={isSelected}
          onCheckedChange={handleCharChange}
        />
        <label
          htmlFor={`${currentTab}-${groupKey}-${charKey}`}
          className='text-xs cursor-pointer'
        >
          {charKey}
        </label>
      </div>
    )
  }
)

const CharacterGroupList = memo(
  ({
    groups,
    currentTab,
    setGroupSelection,
    setCharacterSelection
  }: {
    groups: Record<
      string,
      { name: string; selected: boolean; characters: Record<string, boolean> }
    >
    currentTab: AlphabetCategory
    setGroupSelection: (
      alphabet: AlphabetCategory,
      groupKey: string,
      selected: boolean
    ) => void
    setCharacterSelection: (
      alphabet: AlphabetCategory,
      groupKey: string,
      charKey: string,
      selected: boolean
    ) => void
  }) => {
    return (
      <ScrollArea className='h-[280px]'>
        <div className='p-3 space-y-4'>
          {Object.entries(groups).map(([groupKey, group]) => (
            <CharacterGroup
              key={groupKey}
              groupKey={groupKey}
              group={group}
              currentTab={currentTab}
              setGroupSelection={setGroupSelection}
              setCharacterSelection={setCharacterSelection}
            />
          ))}
        </div>
      </ScrollArea>
    )
  }
)

CharacterGroup.displayName = 'CharacterGroup'
CharacterCheckbox.displayName = 'CharacterCheckbox'
CharacterGroupList.displayName = 'CharacterGroupList'

const CharacterSelector = () => {
  const [open, setOpen] = useState(false)
  const [currentTab, setCurrentTab] = useState<AlphabetCategory>('hiragana')

  const {
    hiraganaGroups,
    katakanaGroups,
    setGroupSelection,
    setCharacterSelection,
    resetSelections
  } = useCharacterSelectionStore()

  const { selectedAlphabet } = useConfigLearnStore()

  useEffect(() => {
    if (selectedAlphabet === 'hiragana') {
      setCurrentTab('hiragana')
    } else if (selectedAlphabet === 'katakana') {
      setCurrentTab('katakana')
    }
  }, [selectedAlphabet])

  const characterCounts = useMemo(() => {
    const countSelectedCharacters = (alphabet: AlphabetCategory) => {
      const currentGroups =
        alphabet === 'hiragana' ? hiraganaGroups : katakanaGroups
      let selectedCount = 0
      let totalCount = 0

      Object.values(currentGroups).forEach(group => {
        Object.values(group.characters).forEach(isSelected => {
          totalCount++
          if (isSelected) selectedCount++
        })
      })

      return { selectedCount, totalCount }
    }

    const hiraganaCounts = countSelectedCharacters('hiragana')
    const katakanaCounts = countSelectedCharacters('katakana')

    return {
      hiragana: hiraganaCounts,
      katakana: katakanaCounts,
      totalSelected:
        selectedAlphabet === 'hiragana+katakana'
          ? hiraganaCounts.selectedCount + katakanaCounts.selectedCount
          : selectedAlphabet === 'hiragana'
          ? hiraganaCounts.selectedCount
          : katakanaCounts.selectedCount,
      totalChars:
        selectedAlphabet === 'hiragana+katakana'
          ? hiraganaCounts.totalCount + katakanaCounts.totalCount
          : selectedAlphabet === 'hiragana'
          ? hiraganaCounts.totalCount
          : katakanaCounts.totalCount
    }
  }, [hiraganaGroups, katakanaGroups, selectedAlphabet])

  const handleTabChange = useCallback((value: string) => {
    setCurrentTab(value as AlphabetCategory)
  }, [])

  const handleReset = useCallback(() => {
    resetSelections()
  }, [resetSelections])

  const handleOpenChange = useCallback((newOpen: boolean) => {
    setOpen(newOpen)
  }, [])

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <TooltipCustom text='Filtrar caracteres'>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            className='w-10 p-0 h-10 relative'
            aria-label='Filtrar caracteres'
          >
            <Filter className='h-4 w-4' />
            {characterCounts.totalSelected < characterCounts.totalChars && (
              <Badge
                variant='secondary'
                className='absolute -top-2 -right-2 h-4 min-w-[16px] px-1 text-[10px] flex items-center justify-center'
                aria-label={`${characterCounts.totalSelected} caracteres seleccionados`}
              >
                {characterCounts.totalSelected}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
      </TooltipCustom>

      <PopoverContent className='p-0 w-[340px]' align='end'>
        <div className='flex items-center justify-between border-b px-3 py-2'>
          <h3 className='font-medium text-sm'>Filtrar caracteres</h3>
          <Button
            variant='ghost'
            size='sm'
            onClick={handleReset}
            className='text-xs h-8'
          >
            Restablecer
          </Button>
        </div>

        {selectedAlphabet === 'hiragana+katakana' ? (
          <Tabs
            defaultValue='hiragana'
            value={currentTab}
            onValueChange={handleTabChange}
            className='w-full'
          >
            <div className='px-3 py-2'>
              <TabsList className='grid grid-cols-2'>
                <TabsTrigger value='hiragana'>
                  Hiragana
                  {characterCounts.hiragana.selectedCount <
                    characterCounts.hiragana.totalCount && (
                    <span className='ml-1 text-xs'>
                      ({characterCounts.hiragana.selectedCount})
                    </span>
                  )}
                </TabsTrigger>
                <TabsTrigger value='katakana'>
                  Katakana
                  {characterCounts.katakana.selectedCount <
                    characterCounts.katakana.totalCount && (
                    <span className='ml-1 text-xs'>
                      ({characterCounts.katakana.selectedCount})
                    </span>
                  )}
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value='hiragana'>
              <CharacterGroupList
                groups={hiraganaGroups}
                currentTab='hiragana'
                setGroupSelection={setGroupSelection}
                setCharacterSelection={setCharacterSelection}
              />
            </TabsContent>

            <TabsContent value='katakana'>
              <CharacterGroupList
                groups={katakanaGroups}
                currentTab='katakana'
                setGroupSelection={setGroupSelection}
                setCharacterSelection={setCharacterSelection}
              />
            </TabsContent>
          </Tabs>
        ) : (
          <CharacterGroupList
            groups={
              selectedAlphabet === 'hiragana' ? hiraganaGroups : katakanaGroups
            }
            currentTab={selectedAlphabet as AlphabetCategory}
            setGroupSelection={setGroupSelection}
            setCharacterSelection={setCharacterSelection}
          />
        )}
      </PopoverContent>
    </Popover>
  )
}

export default CharacterSelector
