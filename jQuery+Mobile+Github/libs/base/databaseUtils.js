function uploadMultipleFilesHelper(datasource, fileList) {
    var isCorrectService = false;
    if (datasource) {
        if (datasource.service && datasource.service.__requestOptions) {
            var options = datasource.service.__requestOptions;
            isCorrectService = options.type === 'post' && options.contentType === false && /^.*\/files$/i.test(options.url);
        }
    }
    if (isCorrectService) {
        if (fileList) {
            var data = new FormData();
            for (var i = 0; i < fileList.length; i++) {
                appendItem(data, fileList[i]);
            }
            try {
                datasource.execute({
                    'allowDataModification': false,
                    'processData': false,
                    'body': data,
                    'cache': false
                });
            } catch (exception) {
                console.log(exception.name + ' ' + exception.message);
                hideSpinner();
            }
        }
    } else {
        console.warn('This data source not be supported in the method of upload multiple files');
    }

    function appendItem(formData, item) {
        if (item) {
            if (item.type === 'file') {
                item = item.files;
            }
            if (item instanceof FileList) {
                for (var i = 0; i < item.length; i++) {
                    appendItem(formData, item[i]);
                }
                return;
            }
            var name;
            if (item.name) {
                name = item.name;
            }
            formData.append(name, item);
        }
    }
}
