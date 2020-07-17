import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;

    return (
      <div className="card card-body my-4">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-success text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>

            {/* INPUT */}
            <input
              type="text"
              name=""
              className="form-control"
              placeholder="Add a new to-do item..."
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-block btn-success mt-3 text-uppercase"
          >
            Add Item
          </button>
        </form>
      </div>
    );
  }
}
