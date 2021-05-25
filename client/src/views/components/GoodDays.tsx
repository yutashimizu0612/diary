import React, { useState } from 'react';
import styled from 'styled-components/macro';
import GoodDay from './GoodDay';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = styled(TableCell)`
  font-size: 16px;
  text-align: center;
`;

type Props = {
  productiveDays: {
    date: string;
    count: number;
    contents: string[];
  }[];
};

const GoodDays: React.FC<Props> = ({ productiveDays }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>日付</StyledTableCell>
            <StyledTableCell>達成タスク数</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productiveDays.map((productiveDay, index) => (
            <GoodDay key={productiveDay.date} index={index} productiveDay={productiveDay} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GoodDays;
