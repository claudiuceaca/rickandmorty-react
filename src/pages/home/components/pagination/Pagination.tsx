import { useContext } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PaginationContainer } from "./Pagination.style";
import { Info } from "../../../../schema/singleCharacterSchema";
import PageContext from "../../../../store/page/page-context";

interface PageProps {
  data: Info | undefined;
}
const Page = ({ data }: PageProps) => {
  const pageCtx = useContext(PageContext);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    pageCtx.setPage(value);
  };

  return (
    <PaginationContainer>
      <Stack spacing={2}>
        <Pagination
          count={data?.pages}
          size="large"
          page={pageCtx.page}
          onChange={handleChange}
        />
      </Stack>
    </PaginationContainer>
  );
};

export default Page;
