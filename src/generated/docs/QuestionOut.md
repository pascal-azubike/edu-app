# QuestionOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**subject** | **string** |  | [default to undefined]
**examType** | [**ExamType**](ExamType.md) |  | [default to undefined]
**examYear** | **number** |  | [default to undefined]
**questionType** | **string** |  | [optional] [default to undefined]
**questionNumber** | **number** |  | [default to undefined]
**questionText** | **string** |  | [default to undefined]
**_options** | [**Array&lt;Option&gt;**](Option.md) |  | [default to undefined]
**correctAnswer** | **string** |  | [default to undefined]
**questionParts** | **Array&lt;string | null&gt;** |  | [optional] [default to undefined]
**imageUrls** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { QuestionOut } from './api';

const instance: QuestionOut = {
    id,
    subject,
    examType,
    examYear,
    questionType,
    questionNumber,
    questionText,
    _options,
    correctAnswer,
    questionParts,
    imageUrls,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
