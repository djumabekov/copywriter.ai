import { createSlice } from '@reduxjs/toolkit';
import { RUBRICS, PRO } from '../data/rubrics_data';
import { TEMPLATES } from '../data/templates_data';

const initialState = {
  isShowMenu: false,
  active_sidebar_link: 1,
  dashboards: { RUBRICS, PRO },
  templates: TEMPLATES,
  current_dashboard: { title: '', descr: '' },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showMenu: (state) => {
      state.isShowMenu = !state.isShowMenu;
    },
    setCurrentDashboard: (state, action) => {
      state.current_dashboard = action.payload;
    },
    setActiveSidebarLink: (state, action) => {
      state.active_sidebar_link = action.payload;
    },
  },
});

export const selectDashboards = (state) => state.ui.dashboards;
export const selectTemplates = (state) => state.ui.templates;
export const selectIsShowMenu = (state) => state.ui.isShowMenu;
export const selectCurrentDashboard = (state) => state.ui.current_dashboard;
export const selectCurrentSidebarLink = (state) => state.ui.active_sidebar_link;

export const uiReducer = uiSlice.reducer;

export const { showMenu, setCurrentDashboard, setActiveSidebarLink } = uiSlice.actions;
