function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}


ask("Вы согласны?",
    () => alert("NICE"),
    () => alert("Not nice"))