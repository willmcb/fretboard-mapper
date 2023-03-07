const startingNote:string = 'C';

interface ScaleMap {
  [key: string]: boolean[];
}

const scales: ScaleMap = {
// for reference 'C',  'C#',  'D',   'D#',  'E',   'F',   'F#',  'G',  'G#',  'A',   'A#',   'B'
  all:          [true, true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true],
  one_note:     [true, false, false, false, false, false, false, false, false, false, false, false],
  major:        [true, false, true,  false, true,  true,  false, true,  false, true,  false, true],
  minor:        [true, false, true,  true,  false, true,  false, true,  true,  false, true,  false],
  minor_pent:   [true, false, false, true,  false, true,  false, true,  false, false, true,  false],
  major_pent:   [true, false, true,  false, true,  false, false, true,  false, true,  false, false],
  major_triads: [true, false, false, false, true,  false, false, true,  false, false, false, false],
  minor_triads: [true, false, false, true,  false, false, false, true,  false, false, false, false],
  whole_tone:   [true, false, true,  false, true,  false, true,  false, true,  false, true,  false],
  ionian:       [true, false, true,  false, true,  true,  false, true,  false, true,  false, true],
  dorian:       [true, false, true,  true,  false, true,  false, true,  false, true,  true,  false],
  phrygian:     [true, true,  false, true,  false, true,  false, true,  true,  false, true,  false],
  lydian:       [true, false, true,  false, true,  false, true,  true,  false, true,  false, true],
  mixolydian:   [true, false, true,  false, true,  true,  false, true,  false, true,  true,  false],
  aeolian:      [true, false, true,  true,  false, true,  false, true,  true,  false, true,  false],
  locrian:      [true, true,  false, true,  false, true,  true,  false, true,  false, true,  false]
}

interface Degree {
  degree: number,
  name: string,
  class_name: string
}

interface DegreeMap {
  [key: string]: Degree[];
}

const blank: Degree  = { degree: -99, name: "", class_name: "" }

const root: Degree           = { degree: 1, name: "root", class_name: "root" }
const maj_second: Degree     = { degree: 2, name: "major 2nd", class_name: "major-second" }
const flat_second: Degree    = { degree: 2, name: "flat 2nd", class_name: "flat-second" }
const maj_third: Degree      = { degree: 3, name: "major 3rd", class_name: "major-third" }
const min_third: Degree      = { degree: 3, name: "minor 3rd", class_name: "minor-third" }
const per_forth: Degree      = { degree: 4, name: "perfect 4th", class_name: "forth" }
const aug_forth: Degree      = { degree: 4, name: "augmented 4th", class_name: "aug-forth" }
const per_fifth: Degree      = { degree: 5, name: "perfect 5th", class_name: "fifth" }
const aug_fifth: Degree      = { degree: 5, name: "augmented 5th", class_name: "aug-fifth" }
const dim_fifth: Degree      = { degree: 5, name: "diminished 5th", class_name: "flat-fifth" }
const maj_sixth: Degree      = { degree: 6, name: "major 6th", class_name: "major-sixth" }
const min_sixth: Degree      = { degree: 6, name: "minor 6th", class_name: "minor-sixth" }
const maj_seventh: Degree    = { degree: 7, name: "major 7th", class_name: "major-seventh" }
const min_seventh: Degree    = { degree: 7, name: "minor 7th", class_name: "minor-seventh" }

const degrees: DegreeMap = {
  major: [
    root,
    blank,
    maj_second,
    blank,
    maj_third,
    per_forth,
    blank,
    per_fifth,
    blank,
    maj_sixth,
    blank,
    maj_seventh
  ],
  minor: [
    root,
    blank,
    maj_second,
    min_third,
    blank,
    per_forth,
    blank,
    per_fifth,
    min_sixth,
    blank,
    min_seventh,
    blank
  ],
  minor_pent:   [
    root,
    blank,
    blank,
    min_third,
    blank,
    per_forth,
    blank,
    dim_fifth,
    blank,
    blank,
    min_seventh,
    blank
  ],
  major_pent:   [
    root,
    blank,
    maj_second,
    blank,
    maj_third,
    blank,
    blank,
    per_fifth,
    blank,
    maj_sixth,
    blank,
    blank
  ],
  major_triads: [
    root,
    blank,
    blank,
    blank,
    maj_third,
    blank,
    blank,
    per_fifth,
    blank,
    blank,
    blank,
    blank
  ],
  minor_triads: [
    root,
    blank,
    blank,
    min_third,
    blank,
    blank,
    blank,
    per_fifth,
    blank,
    blank,
    blank,
    blank
  ],
  whole_tone: [
    root,
    blank,
    maj_second,
    blank,
    maj_third,
    blank,
    aug_forth,
    blank,
    min_sixth,
    blank,
    min_seventh,
    blank
  ],
  ionian: [
    root,
    blank,
    maj_second,
    blank,
    maj_third,
    per_forth,
    blank,
    per_fifth,
    blank,
    maj_sixth,
    blank,
    maj_seventh
  ],
  dorian: [
    root,
    blank,
    maj_second,
    min_third,
    blank,
    per_forth,
    blank,
    per_fifth,
    blank,
    min_sixth,
    min_seventh,
    blank
  ],
  phrygian: [
    root,
    blank,
    maj_second,
    min_third,
    blank,
    per_forth,
    blank,
    per_fifth,
    blank,
    min_sixth,
    min_seventh,
    blank
  ],
  lydian: [
    root,
    blank,
    maj_second,
    blank,
    maj_third,
    blank,
    aug_forth,
    per_fifth,
    blank,
    min_sixth,
    blank,
    maj_seventh
  ],
  mixolydian: [
    root,
    blank,
    maj_second,
    blank,
    maj_third,
    per_forth,
    blank,
    per_fifth,
    blank,
    min_sixth,
    min_seventh,
    blank
  ],
  aeolian: [
    root,
    blank,
    maj_second,
    min_third,
    blank,
    per_forth,
    blank,
    per_fifth,
    min_sixth,
    blank,
    min_seventh,
    blank
  ],
  locrian: [
    root,
    flat_second,
    blank,
    min_third,
    blank,
    per_forth,
    aug_forth,
    blank,
    aug_fifth,
    blank,
    min_seventh,
    blank
  ]
}


interface TuningMap {
  [key: string]: string[][];
}

const tunings: TuningMap = {
  standard_tuning: [
    ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'],
    ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
    ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'],
    ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#'],
    ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#'],
    ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'],
  ],

  drop_d_tuning: [
    ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'],
    ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
    ['F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'],
    ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'],
    ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
    ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'],
  ],

   dadgad_tuning: [
    ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'],
    ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
    ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'],
    ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#'],
    ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
    ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'],
  ]
}

export {
  startingNote,
  scales,
  degrees,
  tunings
}

export type {
  ScaleMap,
  TuningMap,
  Degree
}

