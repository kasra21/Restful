package com.restful.rest.junit;

import org.junit.Test;

import com.restfull.rest.JSONService;
import com.restfull.rest.Letters;

import junit.framework.Assert;

public class JSONServiceTest {
  
  JSONService jsonService = new JSONService();
  
  @Test
  public void getLettersTest( ) {
    
    Letters response = jsonService.getLetters();
    Assert.assertNotNull( response );
    Assert.assertTrue( response.getErrorMsg() == null );
    Assert.assertTrue( response.getSuccess() == true );
    Assert.assertTrue( response.getValue().equals( "TestingGet" ) );

  }
  
  @Test
  public void reverseValidateLettersTestSuccess( ) {
    
    Letters request = new Letters();
    request.setValue( "test" );
    Letters response = jsonService.reverseValidateLetters( request );
    Assert.assertNotNull( response );
    Assert.assertTrue( response.getErrorMsg() == null );
    Assert.assertTrue( response.getSuccess() == true );
    Assert.assertTrue( response.getValue().equals( "TEST" ) );

  }
  
  @Test
  public void reverseValidateLettersTestFail( ) {
    
    Letters request = new Letters();
    request.setValue( "test123" );
    Letters response = jsonService.reverseValidateLetters( request );
    Assert.assertNotNull( response );
    Assert.assertTrue( response.getErrorMsg().equals( "Only a-zA-Z are allowed in text field" ) );
    Assert.assertTrue( response.getSuccess() == false );
    Assert.assertTrue( response.getValue() == null );

  }

}
