/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import BookList from './View/book/book_list';
import Navigation from './View/common/navigation';
import MovieList from './View/movie/movie_list';

type Props = {};
export default class App extends Component<Props> {
    constructor(props){
        super(props);
        this.state={
            tab:"book"
        }
    }
    render() {
        return (
            <TabNavigator
                tabBarStyle={{height: 50}}
                style={{flex: 1}}>
                <TabNavigator.Item
                    title="book"
                    selected={this.state.tab == 'book'}
                    onPress={() => this.setState({tab: 'book'})}
                    renderIcon={
                      () => <Image
                                style={{width: 40, height: 30}}
                                resizeMode="contain"
                                source={require('./src/img/book.png')}>
                            </Image>}>
                    <Navigation component={BookList}></Navigation>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="movie"
                    selected={this.state.tab == 'movie'}
                    onPress={() => this.setState({tab: 'movie'})}
                    renderIcon={
                      () =><Image
                              style={{width: 40, height: 25}}
                              resizeMode="contain"
                              source={require('./src/img/movie.png')}>
                          </Image>}>
                    <Navigation component={MovieList}></Navigation>
                </TabNavigator.Item>
            </TabNavigator>

        );
    }
}
