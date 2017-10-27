class CatModal extends Component {
    submitCategory(obj) {
        this.props.addWorkout(obj);
        this.props.toggleModal(null);
    }

    saveChanges(obj) {
        this.props.editCategory(obj);
        this.props.toggleModal(null);
    }

    render(props) {
        if (!this.props.editMode) {
            return (
                <div className="modal_container">
                    <button className="close_modal_button" onClick={() => this.props.toggleModal(null)}>&#10006;</button>
                    <h2>ADD WORKOUT</h2>
                    <div><date> onChange={(e) => this.props.updateWorkoutDate(e.target.value)} </date></div>
                    
                    <div><input onChange={(e) => this.props.updateWorkoutDescription(e.target.value)} /></div>
                    <div className="workout-form-button"><button>onClick={() => this.submitCategory(this.props)} /></div>
                </div>
            )
            }
        } else {
            return (
                <div className="modal_container">
                    <button className="close_modal_button" onClick={() => this.props.toggleModal(null)}>&#10006;</button>
                    <h2>EDIT WORKOUT</h2>
                    <div><date> onChange={(e) => this.props.updateWorkoutDate(e.target.value)} </date></div>
                    
                    <div><input onChange={(e) => this.props.updateWorkoutDescription(e.target.value)} /></div>
                    <div className="workout-form-button"><button>onClick={() => this.submitCategory(this.props)} /></div>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return state
}

const outputActions = {
    toggleModal,
    
}

export default connect(mapStateToProps, outputActions)(WorkoutModal)