class Draft {

    private state: Object;

    public constructor(state: Object) {
        this.state = state;        
    }
    
    getState(): Object {
        return this.state;
    } 
}

class Author {
	
    private state: Object;
 
    public setState(state: Object) {
        console.log("Author: Setting state to " ,this.state);
        this.state = state;
    }

    public saveDraft(): Draft {
        console.log("Author: Saving to Letter.");
        return new Draft(this.state);
    }

    public  roolback(m:Draft) {
        this.state = m.getState();
        console.log("Author: State after restoring from Letter: ",this.state);
    }

    public sendLetter() {
        console.log(this.state);
    }
}

class DraftsStorage {
	
    private Drafts = [];

    public  addDraft(m:Draft) {
        this.Drafts.push(m);
    }

    public getDraft(index): Draft {
        return this.Drafts[index];
    }
}

let draftStorage = new DraftsStorage();

let author = new Author();

author.setState({text: "My dear hobbit."});
draftStorage.addDraft(author.saveDraft());

author.setState({text: "My dear friend."});
draftStorage.addDraft(author.saveDraft());

author.setState({text: "My dear Frodo."});
draftStorage.addDraft(author.saveDraft());

let firstDraft = draftStorage.getDraft(0);
author.roolback(firstDraft);

author.sendLetter();