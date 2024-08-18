import { Injectable, inject, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
/**
 * Sample Input
 * 11 2 4
 * 4 5 6
 * 10 8 -12
 * Sample Output
 * 15
 */
@Injectable()
export class MatrixService {
  //#region  Properties
  private _snackBar = inject(MatSnackBar);

  public matrixCells = signal<number>(3);
  public matrix2d = signal<number[][]>([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ]);
  public absDiagonalDifference = signal<number | undefined>(undefined);
  //#endregion

  //#region public methods
  public set setMatrixCells(size: number) {
    this.matrixCells.set(size);
    this._generateBlankMatrix();
    this._clearPreviousAbsDiagonalDifference();
  }

  /**
   * Sets the value of the cell in the matrix
   * @param row the index of the row in the matrix
   * @param col the index of the column in the matrix
   * @param event the event that triggered the change
   */
  public setCellInMatrix(row: number, col: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;

    const value = Number(inputElement.value);

    if (!isNaN(value)) {
      const matrix = this.matrix2d();
      matrix[row][col] = value;
      this.matrix2d.set(matrix);
    }
  }

  /**
   * Generates the absolute diagonal difference
   * and sets it to the absDiagonalDifference signal
   */
  public generateAbsDiagonalDifference() {
    if (this.doesCellsContainInvalidValues()) {
      this._snackBar.open(
        'Please fill all the cells with valid numbers between -100 and 100',
        'Close',
        {
          duration: 3000,
        }
      );
      return;
    }
    const matrix = this.matrix2d();
    const size = this.matrixCells();
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < size; i++) {
      primaryDiagonalSum += matrix[i][i];
      secondaryDiagonalSum += matrix[i][this.getReverseMatrixIndex(i)];
    }

    const absDiagonalDifference = Math.abs(
      primaryDiagonalSum - secondaryDiagonalSum
    );

    this.absDiagonalDifference.set(absDiagonalDifference);

    this._snackBar.open(
      'The absolute diagonal difference is: ' + absDiagonalDifference,
      'Close',
      {
        duration: 3000,
      }
    );
  }

  //#endregion

  //#region private methods
  /**
   * Generates a blank matrix with the size of matrixCells
   * the matrix is filled with 0's
   * and sets it to the matrix2d signal
   */
  private _generateBlankMatrix() {
    this.matrix2d.set(
      Array(this.matrixCells())
        .fill(0)
        .map(() => Array(this.matrixCells()).fill(0))
    );
  }

  /**
   * Checks if the cells in the matrix contain invalid values
   * invalid numbers are number bigger then 100 or smaller then -100
   * @returns true if the cells contain invalid values
   */
  public doesCellsContainInvalidValues() {
    const matrix = this.matrix2d();
    return matrix.some((row) => row.some((cell) => cell > 100 || cell < -100));
  }

  /**
   * @param index which is the index of the matrix
   * @returns the index of the matrix where index determines
   * the amount of cells from the back
   */
  private getReverseMatrixIndex(index: number): number {
    const lenghtInArrayNotation = this.matrixCells() - 1;
    return lenghtInArrayNotation - index;
  }

  /**
   * Clears the previous diagonal difference
   */
  private _clearPreviousAbsDiagonalDifference() {
    this.absDiagonalDifference.set(undefined);
  }
  //#endregion
}
