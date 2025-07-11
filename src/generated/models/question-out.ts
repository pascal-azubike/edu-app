/* tslint:disable */
/* eslint-disable */
/**
 * Education Platform API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { ExamType } from './exam-type';
// May contain unused imports in some cases
// @ts-ignore
import type { Option } from './option';

/**
 * 
 * @export
 * @interface QuestionOut
 */
export interface QuestionOut {
    /**
     * 
     * @type {string}
     * @memberof QuestionOut
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof QuestionOut
     */
    'subject': string;
    /**
     * 
     * @type {ExamType}
     * @memberof QuestionOut
     */
    'examType': ExamType;
    /**
     * 
     * @type {number}
     * @memberof QuestionOut
     */
    'examYear': number;
    /**
     * 
     * @type {string}
     * @memberof QuestionOut
     */
    'questionType'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof QuestionOut
     */
    'questionNumber': number;
    /**
     * 
     * @type {string}
     * @memberof QuestionOut
     */
    'questionText': string;
    /**
     * 
     * @type {Array<Option>}
     * @memberof QuestionOut
     */
    'options': Array<Option> | null;
    /**
     * 
     * @type {string}
     * @memberof QuestionOut
     */
    'correctAnswer': string | null;
    /**
     * 
     * @type {Array<string | null>}
     * @memberof QuestionOut
     */
    'questionParts'?: Array<string | null> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof QuestionOut
     */
    'imageUrls'?: Array<string> | null;
}



