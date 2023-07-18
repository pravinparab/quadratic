/* tslint:disable */
/* eslint-disable */
/**
*/
export function hello(): void;
/**
* Evaluates a formula and returns a formula result.
* @param {string} formula_string
* @param {number} x
* @param {number} y
* @param {Function} grid_accessor_fn
* @returns {Promise<any>}
*/
export function eval_formula(formula_string: string, x: number, y: number, grid_accessor_fn: Function): Promise<any>;
/**
* Parses a formula and returns a partial result.
*
* Example output:
* ```json
* {
*   "parse_error_msg": "Bad argument count",
*   "parse_error_span": { "start": 12, "end": 46 },
*   "cell_refs": [
*     {
*       "span": { "start": 1, "end": 4 },
*       "cell_ref": {
*         "Cell": {
*           "x": { "Relative": 0 },
*           "y": { "Absolute": 1 }
*         }
*       }
*     },
*     {
*       "span": { "start": 15, "end": 25 },
*       "cell_ref": {
*         "CellRange": [
*           {
*             "x": { "Absolute": 0 },
*             "y": { "Relative": -2 }
*           },
*           {
*             "x": { "Absolute": 0 },
*             "y": { "Relative": 2 }
*           }
*         ]
*       }
*     }
*   ]
* }
* ```
*
* `parse_error_msg` may be null, and `parse_error_span` may be null. Even if
* `parse_error_span`, `parse_error_msg` may still be present.
* @param {string} formula_string
* @param {number} x
* @param {number} y
* @returns {Promise<any>}
*/
export function parse_formula(formula_string: string, x: number, y: number): Promise<any>;
/**
* Returns a column's name from its number.
* @param {number} n
* @returns {string}
*/
export function column_name(n: number): string;
/**
* Returns a column number from a name, or `null` if it is invalid or out of range.
* @param {string} s
* @returns {number | undefined}
*/
export function column_from_name(s: string): number | undefined;
/**
* @param {any} _text_model
* @param {any} _position
* @param {any} _context
* @param {any} _token
* @returns {any}
*/
export function provideCompletionItems(_text_model: any, _position: any, _context: any, _token: any): any;
/**
* @param {any} text_model
* @param {any} position
* @param {any} _token
* @returns {Promise<any>}
*/
export function provideHover(text_model: any, position: any, _token: any): Promise<any>;
/**
*/
export enum CellTypes {
  Text = 0,
  Formula = 1,
  Javascript = 2,
  Python = 3,
  Sql = 4,
  Computed = 5,
}
/**
* Cell position {x, y}.
*/
export class Pos {
  free(): void;
/**
* @param {bigint} x
* @param {bigint} y
*/
  constructor(x: bigint, y: bigint);
/**
* Column
*/
  x: bigint;
/**
* Row
*/
  y: bigint;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_pos_free: (a: number) => void;
  readonly __wbg_get_pos_x: (a: number) => number;
  readonly __wbg_set_pos_x: (a: number, b: number) => void;
  readonly __wbg_get_pos_y: (a: number) => number;
  readonly __wbg_set_pos_y: (a: number, b: number) => void;
  readonly pos_new: (a: number, b: number) => number;
  readonly eval_formula: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly parse_formula: (a: number, b: number, c: number, d: number) => number;
  readonly column_name: (a: number, b: number) => void;
  readonly column_from_name: (a: number, b: number, c: number) => void;
  readonly hello: () => void;
  readonly provideCompletionItems: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly provideHover: (a: number, b: number, c: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd285fefc356cea59: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h14f5da906b7ee0cc: (a: number, b: number, c: number, d: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
