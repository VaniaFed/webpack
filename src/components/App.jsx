import React, { Component } from 'react';
import { v4 } from 'uuid';

import { WelcomeTitle } from './ui/WelcomeTitle';
import { Menu } from './ui/Menu';
import { FormCreateMenuItem } from './ui/FormCreateMenuItem';
import { MyLink } from './ui/MyLink';

export class App extends Component {
    state = {
        menuList: [
            {
                id: v4(),
                title: 'First'
            },
            {
                id: v4(),
                title: 'Second'
            },
            {
                id: v4(),
                title: 'Third'
            }
        ],
        inputValue: ''
    };

    createMenuItem = () => {
        const { inputValue } = this.state;
        this.setState(({ menuList }) => ({
            menuList: [
                ...menuList,
                {
                    id: v4(),
                    title: inputValue
                }
            ]
        }));
    };
    changeInputValue = newInputValue => {
        this.setState(() => ({ inputValue: newInputValue }));
    };

    render() {
        const { menuList } = this.state;
        const { createMenuItem, changeInputValue } = this;
        return (
            <div className="App">
                <WelcomeTitle title="Hello, world" />
                <Menu menuList={menuList} />
                <FormCreateMenuItem
                    onClick={createMenuItem}
                    changeInputValue={changeInputValue}
                />
                <MyLink text="I'm in VK" reference="https://vk.com/vaniafed" />
            </div>
        );
    }
}
