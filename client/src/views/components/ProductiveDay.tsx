import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { productiveDay } from '../../types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Tooltip from '@material-ui/core/Tooltip';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ListAltIcon from '@material-ui/icons/ListAlt';

const StyledTableRow = styled(TableRow)<{ index: number }>`
  // 偶数の場合、背景を灰色にする
  background: ${(props) => (props.index % 2 === 0 ? '#f6f6f6' : '#fff')};
`;

const StyledTableCell = styled(TableCell)`
  font-size: 16px;
  position: relative;
  text-align: center;
`;

const StyledList = styled.ul`
  padding: 5px;
`;

const StyledItem = styled.li`
  font-size: 13px;
  line-height: 1.6;
  margin: 0 0 3px 20px;
  position: relative;
`;

const StyledCheckBoxIcon = styled(CheckBoxIcon)`
  color: #2cd671;
  position: absolute;
  top: -1px;
  left: -24px;
`;

const StyledTooltip = styled((props) => (
  <Tooltip classes={{ popper: props.className, tooltip: 'tooltip' }} {...props} />
))`
  & .tooltip {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    color: #383838;
  }
`;

const StyledListAltIcon = styled(ListAltIcon)`
  position: absolute;
  top: 12px;
  right: 63px;
`;

type Props = {
  index: number;
  productiveDay: productiveDay;
};

const ProductiveDay: React.FC<Props> = ({ index, productiveDay }) => {
  const { date, count, contents } = productiveDay;
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const title = (
    <StyledList>
      {contents.map((content, index) => (
        <StyledItem key={index}>
          <StyledCheckBoxIcon fontSize="small" />
          {content}
        </StyledItem>
      ))}
    </StyledList>
  );
  return (
    <StyledTableRow index={index}>
      <StyledTableCell>{index + 1}</StyledTableCell>
      <StyledTableCell>{date}</StyledTableCell>
      <StyledTableCell>
        {count}
        <StyledTooltip
          open={isOpen}
          title={title}
          placement="top"
          onClose={handleClose}
          onOpen={handleOpen}>
          <StyledListAltIcon />
        </StyledTooltip>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default ProductiveDay;
