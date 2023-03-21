# Solhint Plugin for custom Open Zeppelin Contracts Rules and Conventions

### This solhint plugin aims to create 4 rules:

1. Check all state variables are private.
2. Check there are no "external virtual" functions (they can't be overridden and call super).
3. Check all internal and private variables and functions are prefixed with underscore.
4. Check all interface names have a capital I prefix.

It is aimed at the following [Open Zeppelin Contracts - Issue #3919](https://github.com/OpenZeppelin/openzeppelin-contracts/issues/3919)

### Install

To install this plugin, after you installed solhint in your Node environment just install the plugin:

```
npm install solhint-plugin-ozcontracts
```

Then you should create a solhint config file (.solhint.json):

```
npx solhint --init
```

And edit the config file to include the plugin and rules. Here is a simple config file example:

```JSON
{
  "extends": "solhint:default",
  "plugins": [
    "ozcontracts"
  ],
  "rules": {
    "ozcontracts/oz-contracts-custom": "error"
  }
}
```

There are some auto fixes in this plugin, to activate them run solhint with the --fix option:

```
npx solhint XXX.sol --fix
```

Any feedback is welcome!
