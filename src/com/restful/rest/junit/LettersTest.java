package com.restful.rest.junit;

import java.util.List;

import org.junit.Assert;
import org.junit.Test;

import com.restfull.rest.Letters;

import mockit.Deencapsulation;

public class LettersTest {
  
  @Test
  public void lettersTest() {
    
    Letters letters = new Letters();
    
    letters.setErrorMsg( "testError" );
    letters.setSuccess( true );
    letters.setValue( "abc" );
    
    Assert.assertTrue( letters.getSuccess() );
    Assert.assertTrue( letters.getValue().equals( "abc" ) );
    Assert.assertTrue( letters.getErrorMsg().equals( "testError" ) );
    
  }

}
