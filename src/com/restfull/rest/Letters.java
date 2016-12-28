package com.restfull.rest;

public class Letters {

	String value;
	String errorMsg;
	Boolean success;
	
	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
	
	public String getErrorMsg() {
	  return errorMsg;
	}

	public void setErrorMsg(String errorMsg) {
	  this.errorMsg = errorMsg;
	}
	
	public Boolean getSuccess() {
	  return success;
	}

	public void setSuccess(Boolean success) {
	  this.success = success;
	}

	@Override
	public String toString() {
		return value;
	}

}