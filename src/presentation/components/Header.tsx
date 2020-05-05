import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MenuList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin-top: 0;
`;
const MenuListItem = styled.li`
  margin-left: 1em;
`;

export const Header: React.FC<{}> = () => (
  <Wrapper>
    <Link href="/">
      <a>hirataku.dev</a>
    </Link>
    <nav>
      <MenuList>
        <MenuListItem>
          <Link href="/">
            <a>Home</a>
          </Link>
        </MenuListItem>
        <MenuListItem>
          <Link href="/about">
            <a>About</a>
          </Link>
        </MenuListItem>
      </MenuList>
    </nav>
  </Wrapper>
);
