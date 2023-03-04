const all_notes  = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const scales = [
  {
    name: 'all notes',
    value: 'all'
  },
  {
    name: 'one note',
    value: 'one_note'
  },
  {
    name: 'major',
    value: 'major'
  },
  {
    name: 'minor',
    value: 'minor'
  },
  {
    name: 'major pentatonic',
    value: 'major_pent'
  },
  {
    name: 'minor pentatonic',
    value: 'minor_pent'
  },
  {
    name: 'major triads',
    value: 'major_triads'
  },
  {
    name: 'minor triads',
    value: 'minor_triads'
  },
  {
    name: 'whole tone scale',
    value: 'whole_tone'
  },
  {
    name: 'ionian',
    value: 'ionian'
  },
  {
    name: 'dorian',
    value: 'dorian'
  },
  {
    name: 'phrygian',
    value: 'phrygian'
  },
  {
    name: 'lydian',
    value: 'lydian'
  },
  {
    name: 'mixolydian',
    value: 'mixolydian'
  },
  {
    name: 'aeolian',
    value: 'aeolian'
  },
  {
    name: 'locrian',
    value: 'locrian'
  }
]

const tunings = [
  {
    name: 'standard tuning',
    value: 'standard_tuning'
  },
  {
    name: 'dadgad tuning',
    value: 'dadgad_tuning'
  },
  {
    name: 'drop d tuning',
    value: 'drop_d_tuning'
  }
]

export {
  all_notes,
  scales,
  tunings
}
