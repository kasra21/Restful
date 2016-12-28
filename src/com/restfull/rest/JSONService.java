package com.restfull.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/json/letters")
public class JSONService {

	@GET
	@Path("/get")
	@Produces("application/json")
	public Letters getLetters() {
	  //just for testing
	  Letters letters = new Letters();
	  letters.setErrorMsg( null );
	  letters.setSuccess( true );
	  letters.setValue("TestingGet");
		
		return letters; 

	}

	@POST
	@Path("/reverseValidateLetters")
	@Produces("application/json")
	@Consumes("application/json")
	public Letters reverseValidateLetters(Letters letters) {
	  
	  String val = letters.getValue();
	  Letters response = reverseValidateAction(val);
	  return response;
		
	}

  private Letters reverseValidateAction( String val ) {
    
    Letters letters = new Letters();
    Boolean isAlpha = true;
      
    //validation:
    //the passed string only contains alpha letters a-zA-Z
    if( !val.matches( "[a-zA-Z]+" ) ){
      isAlpha = false;
      letters.setErrorMsg( "Only a-zA-Z are allowed in text field" );
    }
    else{
      //if valid begin reversing the case
      StringBuilder sb = new StringBuilder( val );
      
      for ( int i=0; i < sb.length(); i++ ){
        char c = sb.charAt( i );
        if( Character.isUpperCase( c ) ){
          sb.setCharAt(i, Character.toLowerCase(c));
        }
        else{
          sb.setCharAt(i, Character.toUpperCase(c));
        }
      }
       
      letters.setValue( sb.toString() );
    }
      
    letters.setSuccess( isAlpha );
    
    return letters;
  }
	
}