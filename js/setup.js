"use strict";

import React from 'react';

function setup(): React.Component {
    class Root extends React.Component {
        state: {
            isLoading: boolean,
            store: any
        };

        constructor() {
            super();
            this.state = {
                storeCreated: false,
                store: null
            };
        }

        componentDidMount(): void {
        }
    }
    return Root;
}
