// Thêm dòng này ở đầu tệp
import React from 'react';

import {
  Box,
  createStyles,
  Grid,
  Group,
  Stack,
  Text,
  useMantineTheme
} from '@mantine/core';
import { Car, HeartHandshake, Stars } from 'tabler-icons-react';
import { ClientCarousel } from 'components';

const useStyles = createStyles((theme) => ({
  rightBanner: {
    flexWrap:'unset',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.gray[1],
    borderRadius: theme.radius.md
  },
}));

function ClientHomeBanner() {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <Grid>
      <Grid.Col md={7} lg={8}>
        {/* <ClientCarousel>
          <Box
            sx={{
              height: '100%',
              minHeight: 315,
              backgroundImage: theme.fn.linearGradient(105, theme.colors.teal[3], theme.colors.lime[3]),
            }}
          >
          </Box>
          <Box
            sx={{
              height: '100%',
              minHeight: 315,
              backgroundImage: theme.fn.linearGradient(0, theme.colors.orange[3], theme.colors.red[3]),
            }}
          >
          </Box>
          <Box
            sx={{
              height: '100%',
              minHeight: 315,
              backgroundImage: theme.fn.linearGradient(0, theme.colors.indigo[3], theme.colors.cyan[3]),
            }}
          >
          </Box>
        </ClientCarousel> */}
        <ClientCarousel>
          <Box>
            <img
              src='https://cdn.tgdd.vn/Products/Images/44/325242/dell-inspiron-15-3520-i5-n5i5052w1-thumb-600x600.jpg '
              alt='Description of image 1'
              style={{ height: 300, minHeight: 315, width: '100%' }}
            />
          </Box>
          <Box>
            <img
              src='https://cdn.mediamart.vn/images/product/laptop-lenovo-ideapad-3-14aba7-82rm003wvn_4ae59236.jpg'
              alt='Description of image 1'
              style={{ height: 300, minHeight: 315, width: '100%' }}
            />
          </Box>
          <Box>
            <img
              src='https://bizweb.dktcdn.net/100/376/459/files/dia-chi-ban-chuot-may-tinh-chinh-hang-tai-ha-noia.jpg?v=1632593188663'
              alt='Description of image 1'
              style={{ height: 200, minHeight: 315, width: '100%' }}
            />
          </Box>
          <Box>
            <img
              src='https://luxaudio.vn/wp-content/uploads/2021/06/e1043d27627a0dfdc063e511109595f3.jpg'
              style={{ height: 300, minHeight: 315, width: '100%' }}
            />
          </Box>
        </ClientCarousel>
      </Grid.Col>
      <Grid.Col md={5} lg={4}>
        <Stack>
          <Group py='sm' px='md' className={classes.rightBanner}>
            <Car size={65} strokeWidth={1} />
            <Stack spacing={theme.spacing.xs / 4}>
              <Text size='md' weight={500}>
                Miễn phí vận chuyển
              </Text>
              <Text size='sm'>
                100% đơn hàng đều được miễn phí vận chuyển khi thanh toán trước.
              </Text>
            </Stack>
          </Group>
          <Group py='sm' px='md' className={classes.rightBanner}>
            <Stars size={65} strokeWidth={1} />
            <Stack spacing={theme.spacing.xs / 4}>
              <Text size='md' weight={500}>
                Bảo hành tận tâm
              </Text>
              <Text size='sm'>
                Bất kể giấy tờ thế nào, công ty luôn cam kết sẽ hỗ trợ khách
                hàng tới cùng.
              </Text>
            </Stack>
          </Group>
          <Group py='sm' px='md' className={classes.rightBanner}>
            <HeartHandshake size={65} strokeWidth={1} />
            <Stack spacing={theme.spacing.xs / 4}>
              <Text size='md' weight={500}>
                Đổi trả 1-1 hoặc hoàn tiền
              </Text>
              <Text size='sm'>
                Nếu phát sinh lỗi hoặc bạn cảm thấy sản phẩm chưa đáp ứng được
                nhu cầu.
              </Text>
            </Stack>
          </Group>
        </Stack>
      </Grid.Col>
    </Grid>
  );
}

export default ClientHomeBanner;
