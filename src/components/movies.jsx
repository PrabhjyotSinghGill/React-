import React, { Component } from 'react';

class Movies extends React.Component {
    state = {
        movies: getMovies()
    };
    render() { 
        return <>
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <button onClick={() => this.handleDelete()} className="btn btn "></button>
                    </td>
                </tr>
            </tbody>
        </table>
        </>;
    }
}
 
export default Movies;