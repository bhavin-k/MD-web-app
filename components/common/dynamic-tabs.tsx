'use client';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { AppBar, Box, Tab, Tabs } from '@mui/material';
import { tabPanel, tabsDescription } from './commonStyle';
import { useDispatch, useSelector } from 'react-redux';
import { tabSelection } from '../../contexts/actions/counterActions';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

interface DynamicTabsProps {
  tabs: { label: string; content: ReactNode }[];
}

const TabPanel = ({ children, value, index }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      className={tabsDescription}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box className="tab-description">{children}</Box>}
    </div>
  );
};

const DynamicTabs: FC<DynamicTabsProps> = ({ tabs }) => {
  const [tabValue, setTabValue] = useState<number>(0);
  const selectedTab = useSelector((state: { selectedTab: number }) => state.selectedTab);
  const dispatch = useDispatch();

  useEffect(() => {
    setTabValue(selectedTab);
  }, [selectedTab]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    dispatch(tabSelection(newValue));
  };

  return (
    <div className={tabPanel}>
      <AppBar position="static" className="tab-container">
        <Tabs value={tabValue} onChange={handleChange} variant="fullWidth" centered>
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} id={`tab-${index}`} />
          ))}
        </Tabs>
      </AppBar>

      {tabs.map((tab, index) => (
        <TabPanel key={index} value={tabValue} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </div>
  );
};

export default DynamicTabs;
