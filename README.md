# One Sentence, One Journey

[![make.fun · u-gudril-cool-one-sentence-one-journey-410686ca](https://make.fun/badge/u-gudril-cool-one-sentence-one-journey-410686ca.svg)](https://make.fun/bounty/u-gudril-cool-one-sentence-one-journey-410686ca?utm_source=github&utm_medium=readme&utm_campaign=u-gudril-cool-one-sentence-one-journey-410686ca)
[![rank](https://make.fun/badge/u-gudril-cool-one-sentence-one-journey-410686ca/teguharifiant/makefun-one-sentence-one-journey/rank.svg)](https://make.fun/bounty/u-gudril-cool-one-sentence-one-journey-410686ca)
[![reward](https://make.fun/badge/u-gudril-cool-one-sentence-one-journey-410686ca/teguharifiant/makefun-one-sentence-one-journey/reward.svg)](https://make.fun/bounty/u-gudril-cool-one-sentence-one-journey-410686ca)

Entry for the [make.fun bounty "One Sentence, One Journey"](https://make.fun/bounty/u-gudril-cool-one-sentence-one-journey-410686ca): a complete story about a journey, told in exactly one sentence. A woman boards a night train in Kraków meaning to burn a suitcase of letters, reads them aloud to a sleeping stranger instead, and steps onto the platform in Vienna carrying nothing but coal smoke and a name she has finally forgiven.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes the story to `out/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`).

## Notes

- Node 22, standard library only, no network access.
- Fully deterministic: every run writes the identical entry.
- The entry is one sentence, 253 characters, original writing.
