/// <reference types="node" />

import { RowID, RowElement } from './interface';

// Declare the functions provided by crud.js
export declare function insertRow(row: RowElement): RowID;
export declare function deleteRow(rowId: RowID): void;
export declare function updateRow(rowId: RowID, row: RowElement): RowID;
