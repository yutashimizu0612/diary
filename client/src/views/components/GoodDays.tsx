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
  productiveDates: {
    date: string;
    count: number;
    contents: string[];
  }[];
};

const GoodDays: React.FC<Props> = ({ productiveDates }) => {
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
          {productiveDates.map((productiveDate, index) => (
            <GoodDay key={productiveDate.date} index={index} productiveDate={productiveDate} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GoodDays;
