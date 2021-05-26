
import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className='header'>
            <h1>待办事项</h1>
            <button
                onClick={() =>
                    handleToggleDarkMode(
                        (previousDarkMode) => !previousDarkMode
                    )
                }
                className='save'
            >
                切换模式
            </button>
        </div>
    );
};

export default Header;