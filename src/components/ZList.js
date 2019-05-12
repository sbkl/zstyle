import React from 'react';
import ZFlatList from './ZFlatList';
import ZSectionList from './ZSectionList';
export default function ZList({data, Item, SectionHeader, actions, ...rest}) {
    let [items, id] = data;
    if (SectionHeader == undefined) {
        return <ZFlatList
            data={items}
            keyExtractor={(item, index) => id ? item[id].toString() : index.toString()}
            renderItem={({item, ...rest}) => {
                return (
                    <Item item={item} actions={actions} {...rest}/>
                )
            }}
            {...rest}
        />
    } else {
        return <ZSectionList
            sections={items}
            keyExtractor={(item, index) => id ? item[id].toString() : index.toString()}
            renderItem={({item, ...rest}) => {
                return (
                    <Item item={item} actions={actions} {...rest}/>
                )
            }}
            renderSectionHeader={SectionHeader}
            {...rest}
        />
    }
}