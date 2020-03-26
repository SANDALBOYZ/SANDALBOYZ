import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@components/Button';
import StoryFilters from '@components/StoryFilters';
import StoryTile from '@components/StoryTile';
import sandal from '@images/sandal.svg';
import { Body } from '@utils/type';
import * as styled from './styles';

const StoriesGrid = ({ stories }) => {
  const [tagFilter, setTagFilter] = useState([]);
  const [yearFilter, setYearFilter] = useState([]);
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

  const getFilteredStories = () => {
    return stories
      .filter(story => {
        if (tagFilter.length && Array.isArray(story.tags)) {
          return tagFilter.find(tag => story.tags.includes(tag));
        } else if (tagFilter.length) {
          return false;
        }

        return true;
      })
      .filter(story => {
        if (yearFilter.length) {
          return yearFilter.includes(new Date(story.date).getFullYear());
        }

        return true;
      });
  };

  const handleCloseFilters = () => {
    setShowFilterDrawer(false);
  };

  const handleOpenFilters = () => {
    setShowFilterDrawer(true);
  };

  const handleFilter = ({ tags, years }) => {
    setTagFilter(tags);
    setYearFilter(years);
  };

  const setTags = tag => {
    if (!tagFilter.includes(tag)) {
      setTagFilter([...tagFilter, tag]);
    } else {
      setTagFilter(tagFilter.filter(t => t !== tag));
    }
  };

  const setYears = year => {
    if (!yearFilter.includes(year)) {
      setYearFilter([...yearFilter, year]);
    } else {
      setYearFilter(yearFilter.filter(y => y !== year));
    }
  };

  const storyYears = [
    ...new Set(stories.map(story => new Date(story.date).getFullYear())),
  ].sort();
  const storyTags = [...new Set(stories.map(story => story.tags).flat())]
    .filter(Boolean)
    .sort();

  const activeTagFilters = tagFilter.map(filter => (
    <styled.ActiveFilter key={filter}>
      {filter}
      <styled.ClearFilter
        onClick={() => {
          setTags(filter);
        }}
        >
          <styled.Icon name="x" />
        </styled.ClearFilter>
      </styled.ActiveFilter>
  ));
  const activeYearFilters = yearFilter.map(filter => (
    <styled.ActiveFilter key={filter}>
      {filter}
      <styled.ClearFilter
        onClick={() => {
          setYears(filter);
        }}
        >
          <styled.Icon name="x" />
        </styled.ClearFilter>
      </styled.ActiveFilter>
  ));

  return (
    <styled.Wrapper>
      <styled.Container>
        <styled.Header>
          <styled.ActiveFilters>
            {activeTagFilters}{activeYearFilters}
          </styled.ActiveFilters>
          <Button theme="text" onClick={handleOpenFilters}>
            Filter
          </Button>
        </styled.Header>
        <styled.Filters>
          <styled.SidebarTitle>Stories</styled.SidebarTitle>
          {storyTags.length > 0 && (
            <>
              <styled.FilterTitle>Tags</styled.FilterTitle>
              {storyTags.map(tag => (
                <styled.Filter
                  active={tagFilter.includes(tag)}
                  key={tag}
                  onClick={() => {
                    setTags(tag);
                  }}
                >
                  {tag}
                </styled.Filter>
              ))}
            </>
          )}
          {storyYears.length > 0 && (
            <>
              <styled.FilterTitle>Year</styled.FilterTitle>
              {storyYears.map(year => (
                <styled.Filter
                  active={yearFilter.includes(year)}
                  key={year}
                  onClick={() => {
                    setYears(year);
                  }}
                >
                  {year}
                </styled.Filter>
              ))}
            </>
          )}
        </styled.Filters>
        {getFilteredStories().length ? (
          <styled.Stories>
            {getFilteredStories().map(story => (
              <StoryTile key={story.id} {...story} />
            ))}
          </styled.Stories>
        ) : (
          <styled.Empty>
            <styled.Image src={sandal} />
            <styled.Heading>No stories found</styled.Heading>
            <Body>
              Try selecting different filters to view more stories.
            </Body>
          </styled.Empty>
        )}
      </styled.Container>
      <StoryFilters
        activeFilters={{
          tags: tagFilter,
          years: yearFilter,
        }}
        allTags={storyTags}
        allYears={storyYears}
        onFilter={handleFilter}
        onClose={handleCloseFilters}
        open={showFilterDrawer}
      />
    </styled.Wrapper>
  );
};

StoriesGrid.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      date: PropTypes.string,
      href: PropTypes.string.isRequired,
      image: PropTypes.object,
      tags: PropTypes.array,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default StoriesGrid;
