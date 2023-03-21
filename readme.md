# Solhint Plugin for custom Open Zeppelin Contracts Rules and Conventions

### This solhint plugin aims to create 4 rules:

1. Check all state variables are private.
2. Check there are no "external virtual" functions (they can't be overridden and call super).
3. Check all internal and private variables and functions are prefixed with underscore.
4. Check all interface names have a capital I prefix.

It is aimed at the following [Open Zeppelin Contracts - Issue #3919](https://github.com/OpenZeppelin/openzeppelin-contracts/issues/3919)
