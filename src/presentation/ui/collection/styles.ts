'use client';

import styled from 'styled-components';

export const Container = styled.article`
  position: relative;
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const Content = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.2rem;
  padding: 3.2rem 1rem;

  .cine-collection-card + .cine-collection-card {
    margin-top: 1.8rem;
  }
`;
