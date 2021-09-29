import { Component } from 'react';
import './addCompany.css';
import NoticeEditor from './components/noticeEditor';
import axios from 'axios';
import SweetAlert from 'sweetalert-react';
import './sweetalert.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import InputTags from './components/inputTags';
import OverlayModal from './components/overlayModal';
import { Prompt } from 'react-router-dom';
import FeedbackModal from './components/feedbackModal';
import Upload from '../upload/Upload';
import { Link } from "react-router-dom";



class addCompany extends Component {
    state = {
        noticeDetails: {
            title: '',
            companyName: '',
            type: '',
            CTC:''
            
        },
        errors: {
            title: '',
            companyName: ''
            // name: '',
            // contact: '',
        },
        noticeText: '',
        AllTags: ['new-notice'],
        formIsHalfFilledOut: false,
        isAnyChange: false,
        showModal: false,
        modalTextStatus: '',
        modalContent: {
            heading: '',
            icon: '',
            text: '',
        },
        isShowPreSubmit: false,
        feedbackshow: false,
        articleIDForFeedback: '',
    }

    handleInputValue = key => e => {
        const { noticeDetails, errors } = this.state;
        noticeDetails[key] = e.target.value;
        errors[key] = null
        this.setState({ noticeDetails, errors })
        //this.setState({ isAnyChange: true })
        this.setState({ formIsHalfFilledOut: true })


    }
    handleEditorInputChange = (data) => {
        this.setState({ articleText: data })
        this.setState({ formIsHalfFilledOut: true })

    }

    handleCheckBoxInput = key => e => {
        const { noticeDetails } = this.state;
        noticeDetails[key] = e.target.checked;
        this.setState({ noticeDetails })

    }
    selectedTags = tags => {
        this.setState({ AllTags: tags })
    }
    checkEmptyFields = () => {
        const { noticeDetails, errors } = this.state
        let valid = true
        for (const val in noticeDetails) {
            if (noticeDetails[val] === '') {
                errors[val] = `Can't be empty`
                valid = false;
                window.scrollTo(0, 0);
            }
        }
        this.setState({ errors })
        if (valid) return true
        return false
    }

    handlePreSubmit = () => {
        if (this.checkEmptyFields()) {
            this.setState({ isShowPreSubmit: true })
        }

    }
    handleSubmitForm = (e) => {

        // e.preventDefault();        This part was causing issues

        const { noticeDetails, noticeText, AllTags, modalContent } = this.state;
        modalContent['heading'] = "Uploading"
        modalContent['icon'] = "fa-upload"
        modalContent['text'] = "Have patience....."
        this.setState({ showModal: true }, () => {
            this.setState({ modalContent })
        })

        const payload = {
            "title": noticeDetails.title,
            // "typeOfArticle": "Interview-experience",
            "companyName": noticeDetails.companyName,
            "type": noticeDetails.type,
            "CTC": noticeDetails.CTC,
            "description": noticeText,
            "tags": AllTags,
            
              
           
        }

        const apiUrl = '/api/v1/notice';

        axios.post(apiUrl, payload).then((res) => {
          
            this.setState({ showModal: false, feedbackshow: true }, () => {
                // this.setState({ articleIDForFeedback: res.data.article._id })
                console.log(res);
            })

        }).catch((err) => {
           
            modalContent['heading'] = "Error while uploading"
            modalContent['icon'] = "fa-frown-o"
            modalContent['text'] = "Sorry for this inconvenience.Kindly retry "
            this.setState({ showModal: true, feedbackshow: false }, () => {
                this.setState({ modalContent })
            })
        })

    }

    render() {
        const { errors } = this.state;
        return (
            <>
                <Prompt
                    when={!!this.state.formIsHalfFilledOut}
                    message='You have unsaved changes, are you sure you want to leave?'
                />
                <div className="container my-3 px-0 write-article">
                    <div className="col-md-8 mx-auto">
                        <div >
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Title</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" required onChange={this.handleInputValue('title')} />
                                <span>{errors.title}</span>
                            </div>
                            <div className="row">

                                <div className="form-group col">
                                    <label htmlFor="exampleFormControlInput2">Company Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput2" required onChange={this.handleInputValue('companyName')} />
                                    <span>{errors.companyName}</span>
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="exampleFormControlInput3">Type</label>
                                    <input type="text" className="articleRequestTextBox form-control" id="exampleFormControlInput3" placeholder="Full-time/Intern" required onChange={this.handleInputValue('name')} />
                                    {/* <span>{errors.type}</span> */}

                                    

                                </div>

                            </div>
                            <div className="row">
                                <div className="form-group col">
                                    <label htmlFor="exampleFormControlInput4">CTC </label>
                                    <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="CTC " required onChange={this.handleInputValue('contact')} />
                                    {/* <span>{errors.CTC}</span> */}
                                </div>

                            </div>
                            <label>Description</label>
                            <NoticeEditor
                                handleInputChange={this.handleEditorInputChange} />

                            <div className="mt-2">
                                <label htmlFor="exampleFormControlInput1">Tags</label>
                                <InputTags
                                    selectedTags={this.selectedTags} tags={this.state.AllTags}
                                />

                            </div>
                    <OverlayModal
                        modalContent={this.state.modalContent}
                        show={this.state.showModal}
                        onHide={() => {
                            this.setState({ showModal: false })
                        }}
                    />

                    <FeedbackModal
                        onHide={() => { this.setState({ feedbackshow: false }) }}
                        show={this.state.feedbackshow}
                        article={this.state.articleIDForFeedback}
                    />
                    <Upload />
                        <button type="submit" className="col-12 mx-auto btn btn-primary my-2" onClick={this.handlePreSubmit}>Submit</button>
                        <div id="button" className="row">
                          <button type="button"><Link to='/dashboard'>Back</Link> </button>
                        </div>
                        <SweetAlert
                            show={this.state.isShowPreSubmit}
                            title="Submit"
                            text="Do you want to submit this Notice ?"
                            showCancelButton
                            onConfirm={() => {
                                this.setState({ isShowPreSubmit: false })
                                this.handleSubmitForm()
                            }}
                            onCancel={() => this.setState({ isShowPreSubmit: false })}
                        />
                        </div>
                    </div>


                </div>
            </>
        )
    }
}

export default addCompany