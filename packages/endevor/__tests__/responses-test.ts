/*
 * Copyright (c) 2020 Broadcom.
 * The term "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Broadcom, Inc. - initial API and implementation
 */

import { parseToType } from '@local/type-parser/parser';
import {
  ErrorResponse,
  SuccessListDependenciesResponse,
  SuccessListElementsResponse,
  SuccessListRepositoriesResponse,
  SuccessPrintResponse,
  SuccessRetrieveResponse,
  UpdateResponse,
} from '../_ext/Endevor';

describe('Endevor responses type parsing', () => {
  describe('Endevor repositories response type parsing', () => {
    it('should parse a response with any data and correct return code', () => {
      // arrange
      const anyData = [
        {
          some_name: 'blah',
        },
        {
          some_different_name: 'blah',
        },
        {
          name: 'real_name',
        },
      ];
      const returnCode = 8;
      const response = {
        body: {
          returnCode,
          data: anyData,
        },
      };
      // act
      const parsedResponse = parseToType(
        SuccessListRepositoriesResponse,
        response
      );
      // assert
      const expectedResponse: SuccessListRepositoriesResponse = {
        body: {
          returnCode,
          data: anyData,
        },
      };
      expect(parsedResponse).toStrictEqual(expectedResponse);
    });
    it('should throw an error for a response without return code', () => {
      // arrange
      const anyData = [
        {
          some_name: 'blah',
        },
        {
          some_different_name: 'blah',
        },
      ];
      const response = {
        body: {
          data: anyData,
        },
      };
      // act && assert
      expect(() =>
        parseToType(SuccessListRepositoriesResponse, response)
      ).toThrowError(
        'Invalid value undefined supplied to : { body: { returnCode: number, data: Array<unknown> } }/body: { returnCode: number, data: Array<unknown> }/returnCode: number'
      );
    });
    it('should throw an error for a response with incorrect return code', () => {
      // arrange
      const anyData = [
        {
          some_name: 'blah',
        },
        {
          some_different_name: 'blah',
        },
      ];
      const response = {
        body: {
          returnCode: '8',
          data: anyData,
        },
      };
      // act && assert
      expect(() =>
        parseToType(SuccessListRepositoriesResponse, response)
      ).toThrowError(
        'Invalid value "8" supplied to : { body: { returnCode: number, data: Array<unknown> } }/body: { returnCode: number, data: Array<unknown> }/returnCode: number'
      );
    });
    it('should throw an error for a response with only return code', () => {
      // arrange
      const response = {
        body: {
          returnCode: 8,
        },
      };
      // act && assert
      expect(() =>
        parseToType(SuccessListRepositoriesResponse, response)
      ).toThrowError(
        'Invalid value undefined supplied to : { body: { returnCode: number, data: Array<unknown> } }/body: { returnCode: number, data: Array<unknown> }/data: Array<unknown>'
      );
    });
  });
  describe('Endevor elements response type parsing', () => {
    it('should parse a response with any elements and correct return code', () => {
      // arrange
      const anyData = [
        {
          whaaat: 'whaaaat???',
        },
        {
          whatttttt: 'whattttt??',
        },
      ];
      const returnCode = 0;
      const response = {
        body: {
          returnCode,
          data: anyData,
        },
      };
      // act
      const parsedResponse = parseToType(SuccessListElementsResponse, response);
      // assert
      const expectedResponse: SuccessListElementsResponse = {
        body: {
          returnCode,
          data: anyData,
        },
      };
      expect(parsedResponse).toStrictEqual(expectedResponse);
    });
    it('should throw an error for a response without return code', () => {
      // arrange
      const anyData = [
        {
          whaaat: 'whaaaat???',
        },
        {
          whatttttt: 'whattttt??',
        },
      ];
      const response = {
        body: {
          data: anyData,
        },
      };
      // act && assert
      expect(() =>
        parseToType(SuccessListElementsResponse, response)
      ).toThrowError(
        'Invalid value undefined supplied to : { body: { returnCode: number, data: Array<unknown> } }/body: { returnCode: number, data: Array<unknown> }/returnCode: number'
      );
    });
    it('should throw an error for a response with incorrect return code', () => {
      // arrange
      const anyData = [
        {
          whaaat: 'whaaaat???',
        },
        {
          whatttttt: 'whattttt??',
        },
      ];
      const response = {
        body: {
          returnCode: '8',
          data: anyData,
        },
      };
      // act && assert
      expect(() =>
        parseToType(SuccessListElementsResponse, response)
      ).toThrowError(
        'Invalid value "8" supplied to : { body: { returnCode: number, data: Array<unknown> } }/body: { returnCode: number, data: Array<unknown> }/returnCode: number'
      );
    });
    it('should throw an error for a response without data', () => {
      // arrange
      const response = {
        body: {
          returnCode: 8,
        },
      };
      // act && assert
      expect(() =>
        parseToType(SuccessListElementsResponse, response)
      ).toThrowError(
        'Invalid value undefined supplied to : { body: { returnCode: number, data: Array<unknown> } }/body: { returnCode: number, data: Array<unknown> }/data: Array<unknown>'
      );
    });
  });
  describe('Endevor print element and listing response type parsing', () => {
    it('should parse a proper response', () => {
      // arrange
      const returnCode = 0;
      const elementContent = 'very important content';
      const response = {
        body: {
          returnCode,
          data: [elementContent],
        },
      };
      // act
      const parsedResponse = parseToType(SuccessPrintResponse, response);
      // assert
      const expectedResponse: SuccessPrintResponse = {
        body: {
          returnCode,
          data: [elementContent],
        },
      };
      expect(parsedResponse).toStrictEqual(expectedResponse);
    });
    it('should throw an error for a response without return code', () => {
      // arrange
      const elementContent = 'very important content';
      const response = {
        body: {
          data: [elementContent],
        },
      };
      // act && assert
      expect(() => parseToType(SuccessPrintResponse, response)).toThrowError(
        'Invalid value undefined supplied to : { body: { returnCode: number, data: Array<string> } }/body: { returnCode: number, data: Array<string> }/returnCode: number'
      );
    });
    it('should throw an error for a response without data', () => {
      // arrange
      const returnCode = 0;
      const response = {
        body: {
          returnCode,
        },
      };
      // act && assert
      expect(() => parseToType(SuccessPrintResponse, response)).toThrowError(
        'Invalid value undefined supplied to : { body: { returnCode: number, data: Array<string> } }/body: { returnCode: number, data: Array<string> }/data: Array<string>'
      );
    });
    it('should throw an error for a response with incorrect data', () => {
      // arrange
      const returnCode = 0;
      const elementContent = {
        firstParagraph: 'blah',
        secondParagraph: 'blahblah',
      };
      const response = {
        body: {
          returnCode,
          data: [elementContent],
        },
      };
      // act && assert
      expect(() => parseToType(SuccessPrintResponse, response)).toThrowError(
        'Invalid value {"firstParagraph":"blah","secondParagraph":"blahblah"} supplied to : { body: { returnCode: number, data: Array<string> } }/body: { returnCode: number, data: Array<string> }/data: Array<string>/0: string'
      );
    });
    it('should throw an error for a response with incorrect return code', () => {
      // arrange
      const returnCode = '8';
      const elementContent = 'very important content';
      const fingerprint = 'fingerprint';
      const response = {
        body: {
          returnCode,
          data: [elementContent],
        },
        headers: {
          fingerprint,
        },
      };
      // act && assert
      expect(() => parseToType(SuccessPrintResponse, response)).toThrowError(
        'Invalid value "8" supplied to : { body: { returnCode: number, data: Array<string> } }/body: { returnCode: number, data: Array<string> }/returnCode: number'
      );
    });
  });
  describe('Endevor retrieve element response type parsing', () => {
    it('should parse a proper response', () => {
      // arrange
      const returnCode = 0;
      const elementContent = 'very important content';
      const fingerprint = 'fingerprint';
      const response = {
        body: {
          returnCode,
          data: [Buffer.from(elementContent)],
        },
        headers: {
          fingerprint,
        },
      };
      // act
      const parsedResponse = parseToType(SuccessRetrieveResponse, response);
      // assert
      const expectedResponse: SuccessRetrieveResponse = {
        body: {
          returnCode,
          data: [Buffer.from(elementContent)],
        },
        headers: {
          fingerprint,
        },
      };
      expect(parsedResponse).toStrictEqual(expectedResponse);
    });
    it('should throw an error for a response without return code', () => {
      // arrange
      const elementContent = 'very important content';
      const fingerprint = 'fingerprint';
      const response = {
        body: {
          data: [Buffer.from(elementContent)],
        },
        headers: {
          fingerprint,
        },
      };
      // act && assert
      expect(() => parseToType(SuccessRetrieveResponse, response)).toThrowError(
        'Invalid value undefined supplied to : { body: { returnCode: number, data: Array<Buffer> }, headers: { fingerprint: string } }/body: { returnCode: number, data: Array<Buffer> }/returnCode: number'
      );
    });
    it('should throw an error for a response without data', () => {
      // arrange
      const returnCode = 0;
      const fingerprint = 'fingerprint';
      const response = {
        body: {
          returnCode,
        },
        headers: {
          fingerprint,
        },
      };
      // act && assert
      expect(() => parseToType(SuccessRetrieveResponse, response)).toThrowError(
        'Invalid value undefined supplied to : { body: { returnCode: number, data: Array<Buffer> }, headers: { fingerprint: string } }/body: { returnCode: number, data: Array<Buffer> }/data: Array<Buffer>'
      );
    });
    it('should throw an error for a response without fingerprint', () => {
      // arrange
      const returnCode = 0;
      const elementContent = 'very important content';
      const response = {
        body: {
          returnCode,
          data: [Buffer.from(elementContent)],
        },
        headers: {},
      };
      // act && assert
      expect(() => parseToType(SuccessRetrieveResponse, response)).toThrowError(
        'Invalid value undefined supplied to : { body: { returnCode: number, data: Array<Buffer> }, headers: { fingerprint: string } }/headers: { fingerprint: string }/fingerprint: string'
      );
    });
    it('should throw an error for a response with incorrect data', () => {
      // arrange
      const returnCode = 0;
      const fingerprint = 'fingerprint';
      const elementContent = {
        firstParagraph: 'blah',
        secondParagraph: 'blahblah',
      };
      const response = {
        body: {
          returnCode,
          data: [elementContent],
        },
        headers: {
          fingerprint,
        },
      };
      // act && assert
      expect(() => parseToType(SuccessRetrieveResponse, response)).toThrowError(
        'Invalid value {"firstParagraph":"blah","secondParagraph":"blahblah"} supplied to : { body: { returnCode: number, data: Array<Buffer> }, headers: { fingerprint: string } }/body: { returnCode: number, data: Array<Buffer> }/data: Array<Buffer>/0: Buffer'
      );
    });
    it('should throw an error for a response with incorrect return code', () => {
      // arrange
      const returnCode = '8';
      const elementContent = 'very important content';
      const fingerprint = 'fingerprint';
      const response = {
        body: {
          returnCode,
          data: [Buffer.from(elementContent)],
        },
        headers: {
          fingerprint,
        },
      };
      // act && assert
      expect(() => parseToType(SuccessRetrieveResponse, response)).toThrowError(
        'Invalid value "8" supplied to : { body: { returnCode: number, data: Array<Buffer> }, headers: { fingerprint: string } }/body: { returnCode: number, data: Array<Buffer> }/returnCode: number'
      );
    });
  });
  describe('Endevor element dependencies response type parsing', () => {
    it('should parse a response with any dependencies and correct return code', () => {
      // arrange
      const anyData = [
        undefined,
        {
          is_it_dependency: 'noooooo',
        },
      ];
      const returnCode = 0;
      const response = {
        body: {
          returnCode,
          data: [
            {
              components: anyData,
            },
          ],
        },
      };
      // act
      const parsedResponse = parseToType(
        SuccessListDependenciesResponse,
        response
      );
      // assert
      const expectedResponse: SuccessListDependenciesResponse = {
        body: {
          returnCode,
          data: [
            {
              components: anyData,
            },
          ],
        },
      };
      expect(parsedResponse).toStrictEqual(expectedResponse);
    });
    it('should throw an error for a response with incorrect return code', () => {
      // arrange
      const anyData = [
        {
          envName: 'ENV',
          stgNum: '1',
          sysName: 'SYS',
          sbsName: 'SBS',
          typeName: 'TYPE',
          elmName: 'DEP1',
        },
      ];
      const returnCode = '12';
      const response = {
        body: {
          returnCode,
          data: [
            {
              components: anyData,
            },
          ],
        },
      };
      // act && assert
      expect(() =>
        parseToType(SuccessListDependenciesResponse, response)
      ).toThrowError(
        'Invalid value "12" supplied to : { body: { returnCode: number, data: Array<{ components: (Array<unknown> | undefined) }> } }/body: { returnCode: number, data: Array<{ components: (Array<unknown> | undefined) }> }/returnCode: number'
      );
    });
    it('should throw an error for a response without return code', () => {
      // arrange
      const anyData = [
        {
          envName: 'ENV',
          stgNum: '1',
          sysName: 'SYS',
          sbsName: 'SBS',
          typeName: 'TYPE',
          elmName: 'DEP1',
        },
      ];
      const response = {
        body: {
          data: [
            {
              components: anyData,
            },
          ],
        },
      };
      // act && assert
      expect(() =>
        parseToType(SuccessListDependenciesResponse, response)
      ).toThrowError(
        'Invalid value undefined supplied to : { body: { returnCode: number, data: Array<{ components: (Array<unknown> | undefined) }> } }/body: { returnCode: number, data: Array<{ components: (Array<unknown> | undefined) }> }/returnCode: number'
      );
    });
    it('should throw an error for a response without data', () => {
      // arrange
      const returnCode = 8;
      const response = {
        body: {
          returnCode,
        },
      };
      // act && assert
      expect(() =>
        parseToType(SuccessListDependenciesResponse, response)
      ).toThrowError(
        'Invalid value undefined supplied to : { body: { returnCode: number, data: Array<{ components: (Array<unknown> | undefined) }> } }/body: { returnCode: number, data: Array<{ components: (Array<unknown> | undefined) }> }/data: Array<{ components: (Array<unknown> | undefined) }>'
      );
    });
  });
  describe('Endevor update and generate response type parsing', () => {
    it('should parse a proper response', () => {
      // arrange
      const returnCode = 0;
      const messages = ['Relax, everything will be fine!'];
      const response = {
        body: {
          returnCode,
          messages,
        },
      };
      // act
      const parsedResponse = parseToType(UpdateResponse, response);
      // assert
      const expectedResponse: UpdateResponse = {
        body: {
          returnCode,
          messages,
        },
      };
      expect(parsedResponse).toStrictEqual(expectedResponse);
    });
    it('should throw an error for a response without return code', () => {
      // arrange
      const messages = ['Relax, everything will be fine!'];
      const response = {
        body: {
          messages,
        },
      };
      // act && assert
      expect(() => parseToType(UpdateResponse, response)).toThrowError(
        'Invalid value undefined supplied to : { body: { returnCode: number, messages: Array<string> } }/body: { returnCode: number, messages: Array<string> }/returnCode: number'
      );
    });
    it('should throw an error for a response with incorrect return code', () => {
      // arrange
      const returnCode = '8';
      const messages = ['Relax, everything will be fine!'];
      const response = {
        body: {
          returnCode,
          messages,
        },
      };
      // act && assert
      expect(() => parseToType(UpdateResponse, response)).toThrowError(
        'Invalid value "8" supplied to : { body: { returnCode: number, messages: Array<string> } }/body: { returnCode: number, messages: Array<string> }/returnCode: number'
      );
    });
    it('should throw an error for a response without messages', () => {
      // arrange
      const returnCode = 0;
      const response = {
        body: {
          returnCode,
        },
      };
      // act && assert
      expect(() => parseToType(UpdateResponse, response)).toThrowError(
        'Invalid value undefined supplied to : { body: { returnCode: number, messages: Array<string> } }/body: { returnCode: number, messages: Array<string> }/messages: Array<string>'
      );
    });
    it('should throw an error for a response with incorrect messages', () => {
      // arrange
      const returnCode = 8;
      const messages = { messageValue: 'Relax, everything will be fine!' };
      const response = {
        body: {
          returnCode,
          messages,
        },
      };
      // act && assert
      expect(() => parseToType(UpdateResponse, response)).toThrowError(
        'Invalid value {"messageValue":"Relax, everything will be fine!"} supplied to : { body: { returnCode: number, messages: Array<string> } }/body: { returnCode: number, messages: Array<string> }/messages: Array<string>'
      );
    });
  });
  describe('Endevor error response type parsing', () => {
    it('should parse a proper response', () => {
      // arrange
      const returnCode = 8;
      const messages = ['Oops, I did it again!'];
      const response = {
        body: {
          returnCode,
          messages,
        },
      };
      // act
      const parsedResponse = parseToType(ErrorResponse, response);
      // assert
      const expectedResponse: ErrorResponse = {
        body: {
          returnCode,
          messages,
        },
      };
      expect(parsedResponse).toStrictEqual(expectedResponse);
    });
    it('should throw an error for a response without return code', () => {
      // arrange
      const messages = ['Oops, I did it again!'];
      const response = {
        body: {
          messages,
        },
      };
      // act && assert
      expect(() => parseToType(ErrorResponse, response)).toThrowError(
        'Invalid value undefined supplied to : { body: { returnCode: number, messages: Array<string> } }/body: { returnCode: number, messages: Array<string> }/returnCode: number'
      );
    });
    it('should throw an error for a response with incorrect return code', () => {
      // arrange
      const messages = ['Oops, I did it again!'];
      const returnCode = '8';
      const response = {
        body: {
          messages,
          returnCode,
        },
      };
      // act && assert
      expect(() => parseToType(ErrorResponse, response)).toThrowError(
        'Invalid value "8" supplied to : { body: { returnCode: number, messages: Array<string> } }/body: { returnCode: number, messages: Array<string> }/returnCode: number'
      );
    });
    it('should throw an error for a response without messages', () => {
      // arrange
      const returnCode = 8;
      const response = {
        body: {
          returnCode,
        },
      };
      // act && assert
      expect(() => parseToType(ErrorResponse, response)).toThrowError(
        'Invalid value undefined supplied to : { body: { returnCode: number, messages: Array<string> } }/body: { returnCode: number, messages: Array<string> }/messages: Array<string>'
      );
    });
    it('should throw an error for a response with incorrect messages', () => {
      // arrange
      const messages = [
        {
          value: 'Oops, I did it again!',
        },
      ];
      const returnCode = 8;
      const response = {
        body: {
          messages,
          returnCode,
        },
      };
      // act && assert
      expect(() => parseToType(ErrorResponse, response)).toThrowError(
        'Invalid value {"value":"Oops, I did it again!"} supplied to : { body: { returnCode: number, messages: Array<string> } }/body: { returnCode: number, messages: Array<string> }/messages: Array<string>/0: string'
      );
    });
  });
});
