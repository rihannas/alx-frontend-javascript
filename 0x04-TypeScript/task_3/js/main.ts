/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with age using spread syntax
const updatedRow: RowElement = { ...row, age: 23 };

// Update the database
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);
