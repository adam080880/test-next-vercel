import MainLayout from "@/layouts/main";
import { Box, Typography } from "@mui/material";

export default function Home() {
  const data = [
    {
      id: '1',
      nama: 'Test'
    },
    {
      id: '1',
      nama: 'Test 2'
    },
    {
      id: '1',
      nama: 'Test 3'
    },
    {
      id: '1',
      nama: 'Test 4'
    },
  ];

  return (
    <MainLayout>
      <Box flex={1} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
        <Typography>test</Typography>
        <Typography>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
        <ol>
          {data.map((d) => <li>{d.nama}</li>)}
        </ol>
      </Box>
    </MainLayout>
  );
}
