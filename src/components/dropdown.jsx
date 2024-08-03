import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function CategoryDropdown() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Groceries', value: 'groceries'},
        {label: 'Gas', value: 'gas'},
        {label: 'Bills', value: 'bills'},
        {label: 'Shopping', value: 'shopping'},
        {label: 'Restaurants', value: 'restaurant'},
        {label: 'Other', value: 'other'},
    ]);

    return (
        <View style={{flex: 1}}>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 15,
                }}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    placeholder={'Choose a category.'}
                />
            </View>

            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Category: {value === null ? 'none' : value}</Text>
            </View>
        </View>
    );
}