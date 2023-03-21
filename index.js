module.exports = [OzContractsCustom];

class OzContractsCustom {
  constructor(reporter, config) {
    this.ruleId = 'oz-contracts-custom';

    this.reporter = reporter;
    this.config = config;
  }

  StateVariableDeclaration(node) {
    if (node.VariableDeclaration.visibility != 'private') {
      this.reporter.error(
        node.name,
        this.ruleId,
        'State variables must be private.'
      );
    }

    if (
      (node.VariableDeclaration.visibility == 'private' ||
        node.VariableDeclaration.visibility == 'internal') &&
      node.name[0] != '_'
    ) {
      this.reporter.error(
        node.name,
        this.ruleId,
        'Private and internal variables must be prefixed with underscore.'
      );
    }
  }

  FunctionDefinition(node) {
    if (node.visibility == 'external' && node.modifiers == 'virtual') {
      this.reporter.error(
        node.name,
        this.ruleId,
        "Functions can't be external and virtual."
      );
    }

    if (
      (node.visibility == 'inernal' || node.visibility == 'private') &&
      node.name[0] != '_'
    ) {
      this.reporter.error(
        node.name,
        this.ruleId,
        'Private and internal functions must be prefixed with underscore.'
      );
    }
  }
}
