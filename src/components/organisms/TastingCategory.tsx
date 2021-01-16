import React, { FC } from 'react';
import { Header } from 'semantic-ui-react';
import TastingItems, { Attributes } from 'containers/molecules/TastingItems';
import { CategoryItems } from 'data/tastingCateogries';

export type Categories = '外観' | '香り' | '味わい' | '総合評価';
type Props = {
  category: CategoryItems;
  subCategories: string[];
  title: Categories;
  updateCategory: (attributes: Attributes) => void;
};

const TastingCategory: FC<Props> = ({
  category,
  subCategories,
  title,
  updateCategory,
}) => (
  <div style={{ marginBottom: '2rem' }}>
    <Header as="h2">{title}</Header>
    {subCategories.map((subCategory) => (
      <div key={subCategory}>
        <Header as="h3">{subCategory}</Header>
        <TastingItems
          subCategory={subCategory}
          items={category[subCategory]}
          updateCategory={updateCategory}
        />
      </div>
    ))}
  </div>
);

export default TastingCategory;