import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CategoryCard from './CategoryCard';

function Categories() {
  return (
    <ScrollView>
        {/** Category Card */}
        <CategoryCard />
    </ScrollView>
    
  )
}

export default Categories