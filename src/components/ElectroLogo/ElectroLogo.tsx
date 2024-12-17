import React from 'react';
// import { useMantineTheme } from '@mantine/core';

interface ElectroLogoProps {
  width?: number;
}

function ElectroLogo({ width = 60 }: ElectroLogoProps) {
  const imageUrl =
    'https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-DH-Cong-nghiep-Ha-Noi.png';

  return <img src={imageUrl} width={width} alt='Trunghieublue Logo' style={{ marginTop: '50px' }} />;
}

export default ElectroLogo;
