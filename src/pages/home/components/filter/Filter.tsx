import React, { useReducer, useContext, useEffect } from "react";
import StatusContext from "../../../../store/input/status-context";
import PageContext from "../../../../store/page/page-context";
import {
  initialState,
  reducer,
} from "../../../../store/reducer status/reducer";
import { FilterItem, SearchBarFilterItems } from "./Filter.style";

const Filter = () => {
  const statusCtx = useContext(StatusContext);
  const pageCtx = useContext(PageContext);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    statusCtx.setStatus(state.status);
  }, [state.status]);

  return (
    <SearchBarFilterItems>
      <FilterItem
        onClick={() => {
          pageCtx.setPage(1);
          dispatch({ type: "alive" });
        }}
      >
        Alive
      </FilterItem>
      <FilterItem
        onClick={() => {
          pageCtx.setPage(1);
          dispatch({ type: "dead" });
        }}
      >
        Dead
      </FilterItem>
      <FilterItem
        onClick={() => {
          pageCtx.setPage(1);
          dispatch({ type: "unknown" });
        }}
      >
        Unknown
      </FilterItem>
      <FilterItem
        onClick={() => {
          pageCtx.setPage(1);
          dispatch({ type: "clean" });
        }}
      >
        Reset Filter
      </FilterItem>
    </SearchBarFilterItems>
  );
};

export default Filter;
