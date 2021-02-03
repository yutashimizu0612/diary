import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #222E24;
`;

const Inner = styled.div`
  margin: 0 auto;
  width: 800px;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const Link = styled.a`
  color: #ccc;
  display: block;
  font-size: 18px;
  padding: 22px 0 20px;
  &:hover {
    color: #fff;
  }
`;

const Header: React.FC = () => (
  <Wrapper>
    <Inner>
      <List>
        <Item><Link>日記を書く</Link></Item>
        <Item><Link>ステータス</Link></Item>
        <Item><Link>みんなの投稿</Link></Item>
        <Item><Link>ランキング</Link></Item>
      </List>
    </Inner>
  </Wrapper>
);

export default Header;
