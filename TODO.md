# TODO
- [ ] read and verify a CREV proof for a given package
- [ ] walk dependency graph and check for proofs
- [ ] generate a proof for a package & version
- [ ] check for updates and warn that potential update isn't reviewed
- [ ] figure out quirks with deps vs npx vs scripts
- [ ] resolve reviews from web-of-trust
- [ ] create schema for Review/Trust YAML doc

## Stories
- [X] read all proofs from a proof repo and store in-memory
  - [X] parse YAML with armour
- [ ] compare in-memory proofs to top-level deps
- [ ] compare in-memory proofs to full dep tree

## Commands
- [ ] `cargo crev verify`
  - [ ] output line count of each package
- [ ] `cargo crev fetch {url,trusted} ...`
- [ ] `cargo crev trust [ID]`
- [ ] `cargo crev {new,query} id
- [ ] `cargo crev git log`
- [ ] `cargo crev report`

## Security and UX
- [ ] pull in proofs without needing to trust the authors
- [ ] crev to do TOFU like with SSH host keys

# CREV
- [ ] bug if branch doesn't exist https://github.com/dpc/crev/blob/a4faa0c10e68ef0bf34206279e00261133676d16/crev-lib/src/local.rs#L436
