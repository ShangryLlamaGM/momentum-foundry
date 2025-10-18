import { EMPYREAN } from '../config.js'
import EmpyreanItemSheet from './item.js'

export default class EmpyreanResourceSheet extends EmpyreanItemSheet {
  get template() {
    return `${EMPYREAN.root_path}/templates/sheets/resource.hbs`
  }

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      width: 500,
      height: 250,
    })
  }
}
