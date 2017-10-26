// @flow

import React from 'react';
import { Text, FlatList, TouchableNativeFeedback } from 'react-native';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import demoData from '../utils/data';

const MainContainer = styled.View`
    margin: 4px 0px;
`;

const CardContainer = styled.View`
    background-color: ${props => props.theme.card.background};
    padding: 8px 0px 0px;
    elevation: 2;
`;

const CatagoryTitle = styled.Text`
    padding-left: 16px;
    font-family: 'Roboto-Bold';
    font-size: 14px;
    color: ${props => props.theme.text.primary};
`;

const ListSeperator = styled.View`
    width: 6px;
`;

const ListHeaderFooter = styled.View`
    width: 5px;
`;

class CatagoryCard extends React.Component {
    render(){
        let { theme } = this.props;   
        let somedata = demoData.search.tags;
        let { catagory } = this.props;        

        return(
            <MainContainer>
                <CardContainer>
                    <CatagoryTitle>{catagory.title}</CatagoryTitle>
                    <FlatList
                        data={catagory.items}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <CatagoryItem item={item} />}
                        ListHeaderComponent={ListHeaderFooter}
                        ListFooterComponent={ListHeaderFooter}
                        ListSeperator={ListSeperator}
                    />
                </CardContainer>
            </MainContainer>
        )
    }
}

const CatagoryItemsContainer = styled.View`
    background-color:  ${props => props.theme.card.background};
    border-radius: 6px;
    height: 120px;
    width: 120px;
    margin: 8px 3px;
    elevation: 4;
`;

const CatagoryItemImage = styled.Image`
    height: 120px;
    width: 120px;
    border-radius: 6px;
`;

const IconContainer = styled.View`
    width: 120px;
    height: 120px;
    position: absolute;
    justify-content: center;
    align-items: center;
`;

const getIconName = (type) => {
    if(type == 'video'){
        return 'play-arrow'
    } else if (type == 'music'){
        return 'music-note'
    }
}

const CatagoryItem = withTheme(({ item }) => (
    <TouchableNativeFeedback useForeground={true} pointerEvents='box-only'>
        <CatagoryItemsContainer>
            <CatagoryItemImage source={{ uri: item.imageURL }} />
            <IconContainer>
                <Icon name={getIconName(item.type)} size={72} color='rgba(255, 255, 255, 0.65)'/>  
            </IconContainer>          
        </CatagoryItemsContainer>
    </TouchableNativeFeedback>
));

export default withTheme(CatagoryCard);