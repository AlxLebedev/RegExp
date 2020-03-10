export default class Validator {
  validateUsername(name) {
    this.name = name;

    // return this.name.search(/^[^\d_-]([a-z_-]\d{0,3})+[^\d_-]$/i) !== -1;
    return this.name.search(/^[a-z][a-z_\d-]*[a-z]$/igm) !== -1 && this.name.search(/\d{4,}/igm) === -1;
  }
}
