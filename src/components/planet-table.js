import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from "@material-ui/core/Link";
import { withStyles } from '@material-ui/styles';

import { formatNumbers, formatString, calculateAndFormatRadius, formatSurfaceArea} from '../utils';

const styles = {
    root: { border: "1px solid grey" }
};

export default function PlanetTable({info}){

    const Cell =  withStyles(styles)(TableCell)

    return (
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <Cell>Planet Name</Cell>
                    <Cell align="right">Climate</Cell>
                    <Cell align="right">Terrain</Cell>
                    <Cell align="right">Population</Cell>
                    <Cell align="right">Surface Area with Water</Cell>
                    <Cell align="right">Radius</Cell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {info.map((row) => (
                    <TableRow key={row.name}>
                      <Cell component="th" scope="row">
                          <Link target="_blank" href={row.url}>{row.name}</Link>
                      </Cell>
                      <Cell align="right">{formatString(row.climate)}</Cell>
                      <Cell align="right">{formatString(row.terrain)}</Cell>
                      <Cell align="right">{formatNumbers(formatString(row.population))}</Cell>
                      <Cell align="right">{formatString(row.surface_water) === "?" ? "?" : `${formatNumbers(formatSurfaceArea(row.surface_water))}%`}</Cell>
                      <Cell align="right">{formatString(row.diameter) === "?" ? "?" : formatNumbers(calculateAndFormatRadius(row.diameter))}</Cell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
    )
}